import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
    console.log(event)
}

export default function BasicBreadcrumbsDeleteAll() {
  return (
    <div role="presentation" className='bg-neutral-50 ml-40' onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" >
        <Link underline="hover" color="inherit" href="/home" >
          Home
        </Link>
        <Typography color="text.primary">
            Thông tin giỏ hàng
        </Typography>
      </Breadcrumbs>
    </div>
  );
}