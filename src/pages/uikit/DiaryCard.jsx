import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: '80%',
        margin: '0 auto 20px ',
        
        color:'#FF6694',
        fontFamily:'Hiragino Maru Gothic Pro,ヒラギノ丸ゴ Pro W4,sans-serif',
        
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      }})

const DiaryCard = (props) =>{
    const classes = useStyles()
    return(
        <Card className={classes.root}>
            <CardHeader 
                title={props.title}  //日記のタイトル
                subheader={props.time}　　//投稿の日付
            />
            {
                props.image.length !== 0 && 
                <CardMedia 
                    className={classes.media}
                    image={props.image.path}　//投稿写真
                    title="Paella dish"　　　　　
                />
            }
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                   {props.contents}
                </Typography>
            </CardContent>
        </Card>

    )
}

export default DiaryCard
    





    