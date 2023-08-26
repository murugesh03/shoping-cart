import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CardOverflow from '@mui/joy/CardOverflow';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  decrementProduct,
  incrementProduct
} from '../../app/features/productSlice';

export default function CartProductCard(props) {
  const { thumbnail, brand, title, price, id, handleDeleteItem, stock } = props;
  const dispatch = useDispatch();
  const hanldeIncrement = (id) => {
    dispatch(incrementProduct(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementProduct(id));
  };
  console.log(props);
  return (
    <Card
      variant='outlined'
      orientation='horizontal'
      sx={{
        width: 520,
        margin: 2,
        '&:hover': {
          boxShadow: 'md',
          borderColor: 'neutral.outlinedHoverBorder'
        }
      }}
    >
      <AspectRatio ratio='1' sx={{ width: 90 }}>
        <img src={thumbnail} srcSet={thumbnail} loading='lazy' alt='' />
      </AspectRatio>
      <CardContent>
        <Typography fontWeight='md' color='neutral' textColor='text.primary'>
          {title}
        </Typography>
        <Typography level='title-sm' sx={{ mt: 1, fontWeight: 'xl' }}>
          {brand}
        </Typography>
        <Typography
          level='title-lg'
          sx={{ mt: 1, fontWeight: 'xl' }}
          endDecorator={
            <Chip component='span' size='sm' variant='soft' color='success'>
              Lowest price
            </Chip>
          }
        >
          Rs {price}
        </Typography>
        <Typography>
          <Button variant='outlined' onClick={() => handleDecrement(id)}>
            -
          </Button>
          <Typography style={{ margin: '0 10px' }}>{stock}</Typography>
          <Button variant='outlined' onClick={() => hanldeIncrement(id)}>
            +
          </Button>
        </Typography>
      </CardContent>

      <CardOverflow>
        <IconButton
          aria-label='delete'
          size='medium'
          onClick={() => handleDeleteItem(id)}
        >
          <DeleteIcon fontSize='inherit' />
        </IconButton>
      </CardOverflow>
    </Card>
  );
}
