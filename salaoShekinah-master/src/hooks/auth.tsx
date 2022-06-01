import React, { createContext, ReactNode, useContext, useState } from "react";
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';
import { AsyncStorage } from "react-native";

const {CLIENT_ID}= process.env;
const {REDIRECT_URI}= process.env;

interface AuthProvideProps{
    children: ReactNode;
}

interface User{
    id: string;
    name: string;
    email: string;
    photo?: string;
}

interface IAuthContextData{
    user: User;
    SignInWithGoogle(): Promise<void>;
    SignInWithApple(): Promise<void>;
}

interface AuthorizationResponse{
    params: {
        access_token: string;
    },
    type: string;
}



const AuthContext = createContext({} as IAuthContextData);

function AuthProvider ({children}:AuthProvideProps) {
    const [user, setUser] = useState<User>({} as User);

    async function SignInWithGoogle(){
        try{
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');
            console.log(REDIRECT_URI);
            
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

            const { type, params } = await AuthSession
            .startAsync({ authUrl }) as AuthorizationResponse;
            
            if (type === 'success'){
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const userInfo = await response.json();
                console.log(userInfo);

                setUser({
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.given_name,
                    photo: userInfo.picture
                })
            }
        }
        catch(err){
            throw new Error(err)
        }
    }

    async function SignInWithApple(){
        try{
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL
            ]
            });

            if(credential){
                const userLogged = {
                    id: String(credential.user),
                    email: credential.user!,
                    name: credential.fullName!.givenName!,
                    photo: undefined
                }
                setUser(userLogged);
                await AsyncStorage.setItem('@gofinance:user', JSON.stringify(userLogged))
            }

            

        }
        catch(err){
            throw new Error(err)
        }
    }

    return(
        <AuthContext.Provider value={{ 
            user,
            SignInWithGoogle,
            SignInWithApple
        }}>
              {children}
        </AuthContext.Provider>
    )
}

const useAuth = () =>{
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };