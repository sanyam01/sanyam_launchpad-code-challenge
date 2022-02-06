import { Grid, Typography } from "@mui/material";
import classes from "./AddPostLayout.module.css";
import Card from "./Card";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useRef } from "react";
import { sendPostData } from "../../../store/post-actions";
import { editPostData } from "../../../store/post-actions";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

const AddPostLayout = (props) => {

    const dispatch = useDispatch();

    const titleRef = useRef("");
    const idRef = useRef("");
    const bodyRef = useRef("");
    const editStateValue = useSelector((state) => state.addPosts.editPostState);
    const userIdValue = useSelector((state) => state.addPosts.editPostUserId);

    const postInfo = {

        title: titleRef.current.value,
        id: idRef.current.value,
        body: bodyRef.current.value,
      };

      const editInfo = {
        userId: userIdValue,
        title: titleRef.current.value,
        id: idRef.current.value,
        body: bodyRef.current.value,
      };
    
      const onClickHandler = (props) => {

        if(editStateValue){
            console.log("I am here asking to submit the edit info in AddPostLayout");
            dispatch(editPostData(editInfo));
        }
        else{
            dispatch(sendPostData(postInfo));
            console.log("I am here asking to submit the newnnnn AddPostLayout");
        }

           
      };

  return (
    <div className={classes.backdrop} >
      <Card className={classes.modal}>
        <Grid container rowSpacing={2}>
          <Typography variant="h4"> Add a new post</Typography>
        </Grid>
        <Grid container rowSpacing={2}>
          <Grid item xs={4}>
            <Typography variant="h6"> UserId :</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField inputRef={idRef} defaultValue = {props.id}/>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h6">Title :</Typography>
          </Grid>

          <Grid item xs={8}>
            <TextField inputRef={titleRef} defaultValue = {props.title}/>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Body :</Typography>
          </Grid>

          <Grid item xs={8}>
            <TextField inputRef={bodyRef} defaultValue = {props.body}/>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={onClickHandler}>{props.name}</Button>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default AddPostLayout;
