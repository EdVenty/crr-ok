import React from "react";
import { GoogleAuthProvider, Auth, signInWithPopup } from 'firebase/auth';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AuthContext } from '../auth';

interface IProps {};
interface IState {
    name: string
};

export class Account extends React.PureComponent<IProps, IState>{
    auth: Auth | null;
    provider: GoogleAuthProvider | null;
    static contextType = AuthContext;
    constructor(props: IProps){
        super(props);
        this.authorize = this.authorize.bind(this);
        this.auth = null;
        this.provider = null;
        this.state = {
            name: "name"
        };
    }
    authorize(){
        signInWithPopup(this.auth!, this.provider!)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential!.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            this.setState({
                name: user.displayName!
            });
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(credential);
        });
    }
    render(){
        this.auth = this.context.auth;
        this.provider = this.context.provider;
        return <Box sx={{
            position: 'fixed',
            right: '1rem',
            top: '1rem'
          }} onClick={this.authorize}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography variant="body1" sx={{color: "#fff"}}>
                {this.state.name}
              </Typography>
              <Avatar alt="Андрей Данильченко" />
            </Stack>
          </Box>
    }
}