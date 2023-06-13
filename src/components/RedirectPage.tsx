import React, { useEffect, useState } from 'react';
import { Modal, ModalContent, VStack, CircularProgress } from "@chakra-ui/react";
import { useParams, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../util/firebase-config';
import { LoaderScreen } from "./LoaderScreen";

const RedirectPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();

        db.collection('shortenedLinks')
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    const originalUrl = data?.originalUrl;

                    window.location.href = originalUrl;
                } else {
                    console.error('Посилання не знайдено');
                    navigate('/UrlShortener/not-found');
                }
            })
            .catch((error) => {
                console.error('Помилка при отриманні посилання з бази даних:', error);
                navigate('/UrlShortener/error');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id, navigate]);

    let content: JSX.Element | null = null;

    if (isLoading)
        content = <LoaderScreen/>

    return content;
}

export default RedirectPage;