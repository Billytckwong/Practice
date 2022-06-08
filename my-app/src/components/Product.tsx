import React, { useState } from 'react';
export default function Product(props: any) {
    const [selectState, setSelectState] = useState(false);
    const [selectItemData, setSelect] = props.select;
    const selectitem = (code: any) => {
        console.log(code);
        // console.log(selectItemData.find((item: any) => item === code));
        // console.log(selectItemData);
        if (selectItemData?.find((item: any) => item === code) === undefined) {
            console.log('select item');
            setSelect((oldArray: any) => [...oldArray, code]);
            setSelectState(!selectState);
            //props.selectItemData = useContext(selectItemData);
            console.log(code);
        } else {
            console.log('already selected');
        }
    };

    const cancelitem = (code: any) => {
        console.log('cancelitem');
        // console.log(selectItemData.find((element: any) => element === code));
        if (selectItemData.find((element: any) => element === code) !== undefined) {
            console.log('cencel Item');
           setSelect(selectItemData.filter((item: any) => item !== code));
            setSelectState(!selectState);
            // console.log(selectItemData);
        }
    };
    const [Details, setDetails] = useState(null);
    const [DetailsState, setDetailsState] = useState(false);
    const showDetail = (summary: any) => {
        if (!DetailsState) {
            setDetails(summary);
            setDetailsState(true);
            console.log(DetailsState);
        } else {
            setDetails(null);
            setDetailsState(false);
            console.log(DetailsState);
        }
    };
    return (
  
            <li className={selectState ? "SelectProduct" : "nonSelectProduct"}>
                <img src={props.product.variantOptions[0].mainImage.url} alt="error" />
                {<h4>{props.product.name ? props.product.name : 'Null'}</h4>}
                {
                    <button className="product-button" onClick={selectState ? (e) => cancelitem(props.product.code) : (e) => selectitem(props.product.code)}>
                        {selectState ? 'Cancel' : 'Select'}
                    </button>
                }

                {
                    <button className="product-button" onClick={(e) => showDetail(props.product.summary)}>
                        details
                    </button>
                }
                <h4>{Details}</h4>
            </li>
 
    );
}
