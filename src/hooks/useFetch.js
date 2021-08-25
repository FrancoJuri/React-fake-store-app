import { useEffect, useRef, useState } from 'react';

const useFetch = (url) => {

    const isMounted = useRef(true)

    const [state, setState] = useState({data: null, loading: true, error: null,});

    useEffect(() => {
        
        return () => {
           isMounted.current = false; 
        }
    }, [])

    useEffect(() => {

        setState({data: null, error: null, loading: true,})

        fetch(url)
            .then(res => res.json())
            .then(data => {

                if(isMounted.current){
                        setState({
                            loading: false,
                            data,
                            error: null,
                        })
                }
            })
            .catch(() => setState({
                data: null,
                loading: false,
                error: 'No se pudo cargar la info',
            }))

    }, [url]);

    return state;

}

export default  useFetch;