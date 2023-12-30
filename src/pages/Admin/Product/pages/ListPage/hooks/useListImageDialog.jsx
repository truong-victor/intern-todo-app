import {
  Box,
  CircularProgress,
  Dialog,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useRequest } from "ahooks";
import Image from "mui-image";
import { useState } from "react";
import { productService } from "../../../services/productService";

export const useListImageDialog = (props) => {
  const [open, setOpen] = useState(false);

  const [dialogData, setDialogData] = useState([]);

  const { data, run, loading } = useRequest(productService.find, {
    manual: true,
  });

  const handleOpen = (id) => {
    // setDialogData(data);
    run(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const render = () => {
    return (
      open && (
        <Dialog maxWidth="lg" onClose={handleClose} open={open}>
          <DialogTitle>
            <Typography>title</Typography>
          </DialogTitle>

          {loading ? (
            <div className="flex justify-center min-h-[30vh]">
              <CircularProgress />
            </div>
          ) : (
            <Box className="flex flex-col gap-12">
              {JSON.parse(data?.data?.listImage ?? "[]").map((image) => (
                <div key={image} className="w-full aspect-video">
                  <Image src={image} alt="a" width="full" height="full" />
                </div>
              ))}
            </Box>
          )}
        </Dialog>
      )
    );
  };

  return {
    handleCloseListImageDialog: handleClose,
    handleOpenListImageDialog: handleOpen,
    renderListImageDialog: render,
  };
};
