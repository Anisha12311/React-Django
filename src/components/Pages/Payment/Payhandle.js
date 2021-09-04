import React from 'react' 
import './Payhandle.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,

    },
      h5:{
        fontSize :'3rem',
       
    },
     
  
  });
  
const Payhandle = () => {
    const classes = useStyles();
    return (
      <div div className = " payment_contain">
              <div className ="bank">
                     <h3 className = "bank_head">Bank Details</h3>
                    <label >Bank Name </label>
                    <p >SBI Bank                            </p>
                    <label >Account Holder Name </label>
                    <p >
                        Michael Rechsteiner</p>
                    <label >Account Number </label>
                    <p >
                        678903455</p>
                    <label >IFSC Code </label>
                    <p >487345                            </p>
                    <label>Account Type </label>
                    <p >
                        Current Account</p>
                    </div>
          <div>  
              <div className = "card_contain">
                  <div className = "card_m1">
<Card className={classes.root}>
      <CardActionArea>
      <Typography gutterBottom variant="h5" component="h2">
      Paytm  
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Paytm Number
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            12345
          </Typography>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image="https://pngimg.com/uploads/qr_code/qr_code_PNG34.png"
          title="Contemplative Reptile"
        />
       
      </CardActionArea>
      
     
    </Card>
</div>
<div className = "card_m1">
    <Card className={classes.root}>
      <CardActionArea className = "Pay_type" >
      <Typography  gutterBottom variant="h5" component="h2" >
        Google Pay
          </Typography>
          <Typography   gutterBottom variant="h6" component="h2">
            Googlepay Number
          </Typography>
          <Typography  gutterBottom variant="h6" component="h2">
            12345
          </Typography>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image="https://pngimg.com/uploads/qr_code/qr_code_PNG34.png"
          title="Contemplative Reptile"
        />
       
      </CardActionArea>
      
     
    </Card>
</div>

<div className = "card_m1">
    <Card className={classes.root}>
      <CardActionArea>
      <Typography gutterBottom variant="h5" component="h2">
      Phone Pay
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Phonepay Number
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            12345
          </Typography>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image="https://pngimg.com/uploads/qr_code/qr_code_PNG34.png"
          title="Contemplative Reptile"
        />
       
      </CardActionArea>
      
     
    </Card>
</div>


    </div>
              </div>
              
     </div>
       
    )
}

export default Payhandle