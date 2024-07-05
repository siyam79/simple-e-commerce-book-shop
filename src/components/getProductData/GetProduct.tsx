import { productData } from '@/type/type';
import { GetStaticProps } from 'next';


export const GetProduct : GetStaticProps = async () => {
    // Fetch AI data from your API or local JSON file
    const res = await fetch('/public/data.json');
    const data: productData[] = await res.json();
    console.log( "data" , data);



    return {
        props: {
            productData: data,
        },
    };
};