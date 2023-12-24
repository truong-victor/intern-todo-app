import { Box } from "@mui/material";

function Filter(){
    return (
      <Box className="bg-[#fff] py-[20px] px-0 pb-18 my-12 rounded-[10px]">
        <div className="flex p-4 border-b border-gray-300">
          <p className="w-1/6 title font-semibold">Khoảng giá:</p>
          <ul className="list_filter flex gap-3">
            <a className="rounded-2 border border-gray-300 bg-gray-100 px-4 py-1 text-sm text-black hover:text-blue-500 hover:border-blue-500 cursor-pointer">1 trieu - 5 trieu</a>
            <a className="rounded-2 border border-gray-300 bg-gray-100 px-4 py-1 text-sm text-black hover:text-blue-500 hover:border-blue-500 cursor-pointer">1 trieu - 5 trieu</a>
            <a className="rounded-2 border border-gray-300 bg-gray-100 px-4 py-1 text-sm text-black  hover:text-blue-500 hover:border-blue-500 cursor-pointer">1 trieu - 5 trieu</a>
          </ul>
        </div>
      </Box>
    );
}
export default Filter