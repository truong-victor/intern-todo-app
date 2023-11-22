import { isAfter, isBefore, isValid } from "date-fns";
import moment from "moment";
import { useEffect } from "react";
import * as Yup from "yup";

export const REGEX = {
  PHONE: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
  CODE: /^[a-z0-9A-Z.đĐ_-]+$/,
  IMAGE_URL: /\.(jpeg|jpg|gif|png)$/,
  YOUTUBE_URL:
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)$/,
  VIDEO_URL: /\.(mp4|mkv)/,
  URL: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/,
  LINK_PDF: /\.(pdf)$/,
  YOUTUBE_URL_V2: /^(https?\:\/\/)?((www\.)?youtube\.com|youtu\.be)\/.+$/,
};

Yup.addMethod(
  Yup.string,
  "code",
  function (
    errorMessage = "Chỉ được phép nhập ký tự số, chữ không dấu, các ký tự '-' '_' '.' và không có khoảng cách"
  ) {
    return this.matches(REGEX.CODE, {
      message: errorMessage,
      excludeEmptyString: true,
    });
  }
);

Yup.addMethod(
  Yup.string,
  "phone",
  function (errorMessage = "Số điện thoại sai định dạng") {
    return this.matches(REGEX.PHONE, {
      message: errorMessage,
      excludeEmptyString: true,
    });
  }
);

Yup.addMethod(
  Yup.string,
  "imageUrl",
  function (errorMessage = "Đường dẫn ko đúng định dạng") {
    return this.matches(REGEX.IMAGE_URL, {
      message: errorMessage,
      excludeEmptyString: true,
    });
  }
);

Yup.addMethod(
  Yup.string,
  "linkPDF",
  function (errorMessage = "Đường dẫn ko đúng định dạng") {
    return this.matches(REGEX.LINK_PDF, {
      message: errorMessage,
      excludeEmptyString: true,
    });
  }
);

Yup.addMethod(
  Yup.string,
  "isUrl",
  function (errorMessage = "Đường dẫn ko đúng định dạng") {
    return this.matches(REGEX.URL, {
      message: errorMessage,
      excludeEmptyString: true,
    });
  }
);

Yup.addMethod(
  Yup.string,
  "videoUrl",
  function (errorMessage = "Đường dẫn video ko đúng định dạng") {
    const finalRegex = new RegExp(
      new RegExp(REGEX.YOUTUBE_URL).source +
        "|" +
        new RegExp(REGEX.VIDEO_URL).source
    );
    return this.matches(finalRegex, {
      message: errorMessage,
      excludeEmptyString: true,
    });
  }
);

Yup.addMethod(
  Yup.string,
  "isYoutubeURL",
  function (errorMessage = "Đường dẫn video ko đúng định dạng") {
    return this.matches(REGEX.YOUTUBE_URL_V2, {
      message: errorMessage,
      excludeEmptyString: true,
    });
  }
);

Yup.addMethod(Yup.date, "mustBefore", function (dependentPath) {
  return this.test("MUST_BEFORE", function (value) {
    const dependentValue = this?.parent?.[dependentPath];

    if (isValid(value) && isValid(dependentValue)) {
      const check = isBefore(value, dependentValue);
      return check
        ? true
        : this.createError({
            message: `Phải nhỏ hơn ngày ${moment(dependentValue).format("L")}`,
          });
    }

    return true;
  });
});

Yup.addMethod(Yup.date, "mustAfter", function (dependentPath) {
  return this.test("MUST_AFTER", function (value) {
    const dependentValue = this?.parent?.[dependentPath];

    if (isValid(value) && isValid(dependentValue)) {
      const check = isAfter(value, dependentValue);

      return check
        ? true
        : this.createError({
            message: `Phải lớn hơn ngày ${moment(dependentValue).format("L")}`,
          });
      // return compareAsc(
      // 	parse(format(value, 'dd/MM/yyyy'), 'dd/MM/yyyy', new Date()),
      // 	parse(format(dependentValue, 'dd/MM/yyyy'), 'dd/MM/yyyy', new Date()) //
      // ) <= 0
      // 	? this.createError({
      // 			message: `${t('core:validation.mustAfter')} ${moment(dependentValue).format('L')}`
      // 	  })
      // 	: true
    }

    return true;
  });
});

export const useYupChangeLocale = () => {
  useEffect(() => {
    Yup.setLocale({
      mixed: {
        required: "Trường này là bắt buộc",
      },
      string: {
        required: "Trường này là bắt buộc",
        email: "Email không đúng định dạng",
        max: ({ max }) => `Tối đa ${max} kí tự`,
        min: ({ min }) => `Ít nhất ${min} kí tự`,
      },
      array: {
        min: `Tối thiếu 1 đối tượng`,
      },
      number: {
        required: "Trường này là bắt buộc",
        min: ({ min }) => `Giá trị phải hớn hơn hoặc bằng ${min}`,
        max: ({ max }) => `Giá trị phải nhỏ hơn hoặc bằng ${max}`,
        moreThan: ({ more }) => `Giá trị phải hớn hơn ${more}`,
        integer: () => `Giá trị phải là số nguyên`,
      },
    });
  }, []);
};

export default Yup;
