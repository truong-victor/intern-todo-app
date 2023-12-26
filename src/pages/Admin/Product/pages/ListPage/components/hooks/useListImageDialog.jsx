import { Box, Dialog, DialogTitle } from '@mui/material';
import Image from 'mui-image';
import React, { useState } from 'react'

export const useListImageDialog = (props) =>{
    const [open,setOpen] = useState(false);
    const [dialogData, setDialogData] = useState([]);
    const handleOpen = (data) => {
        setDialogData(data)
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const render = () =>{
        return open && <Dialog onClose={handleClose} open={open}>
            <DialogTitle className="sticky top-0 bg-blue-700 z-10 text-center text-white">Ảnh chi tiết</DialogTitle>
        <Box className="flex flex-col gap-12">
            {dialogData.map(image =>  <div key={image} className='w-full aspect-video '>
                <Image alt='a'  src={image} width='full' height='full'></Image>
            </div> )}
           
        </Box>
        </Dialog>;
    }

    return {handleCloseListImageDialog: handleClose,
            handleOpenListImageDialog:handleOpen ,
            renderListImageDialog: render 
    };
}
