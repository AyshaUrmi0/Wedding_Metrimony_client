import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import Authcontext from '../Authcontext/Authcontext';
import auth from '../../Firebase/firebase.init';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => {
                setUser(null); 
            })
            .finally(() => {
                setLoading(false); 
            });
    };
    

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //         setUser(currentUser);
    //         console.log('Signed in',currentUser);
    //         if(currentUser?.email){
    //             const user={email:currentUser.email};
    //             axiosPublic.post('/jwt',user)
    //             .then(res=>{

    //                 if(res.data.token)
    //                 {
    //                 //console.log('logged in',res.data)});
    //                 localStorage.setItem("access token", res.data.token);
    //                 }
                    
                    
    //         })
    //     }
    //         else{
    //            localStorage.removeItem("access token");
    //         }

            
    //     });
    //     return unsubscribe;
    // }, []);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser?.email) {
            setUser(currentUser); 
            const user = { email: currentUser.email };
    
            axiosPublic
              .post('/jwt', user)
              .then((res) => {
                if (res.data.token) {
                  localStorage.setItem('access token', res.data.token);
                }
              })
              .catch((error) => {
                console.error('Error getting token:', error);
              })
              .finally(() => {
                setLoading(false); 
              });
          } else {
            setUser(null); 
            localStorage.removeItem('access token');
            setLoading(false); 
          }
        });
    
        return unsubscribe; 
      }, [axiosPublic]);
    

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    };

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;