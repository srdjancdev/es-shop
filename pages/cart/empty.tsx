import NextLink from 'next/link';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';

import { ShopLayout } from '../../components/layout';

const EmptyPage = () => {
  return (
    <ShopLayout title='Empty cart' pageDescription='No items in cart'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography>Your cart is empty</Typography>
          {/* <NextLink href='/' passHref> */}
          <Link href='/' typography='h4' color='secondary'>
            Go back
          </Link>
          {/* </NextLink> */}
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
