import React, {useState} from 'react'
import {gender, size, category} from './sortfilterchoices'

const SortFilterItems = () => {
    const productsGender = gender;
    const productsSize = size;
    const productsCategory = category;

    const [checkedItems, setCheckedItems] = useState({});

    console.log('checkedItems', checkedItems)

    const changeHandler = (e) => {
        setCheckedItems({...checkedItems, [e.target.value]: e.target.checked});
    }

    let queryArray = [];
    let needToBeFilteredQuery = Object.entries(checkedItems).forEach(([key,value]) => {
        if(value === true) {
            queryArray.push(key)
        }
    });

    let params = queryArray.map(item => {
        if(productsGender.find(prod => prod.value === item)){
            return 'gender=' + item
        } else if (productsSize.find(prod => prod.value === item)) {
            return 'size=' + item
        } else {
            return 'category=' + item
        }
    }).join('&')

    console.log('params', params)

    const submitHandler = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
            <div className="">
                <ul className="mb-8">
                <strong><span className="font-mono">Gender:</span></strong>
                    {productsGender.map(item => (
                        <li key={item.id} className="">
                            <label className="font-mono">
                                <input type="checkbox" value={item.value} onChange={changeHandler} /><span className="ml-2">{item.value}</span>
                            </label>
                        </li>
                    ))}
                </ul>
                <ul className="mb-8">
                <strong><span className="font-mono">Size:</span></strong>
                    {productsSize.map(item => (
                        <li key={item.id} className="">
                            <label className="font-mono">
                                <input type="checkbox" value={item.value} onChange={changeHandler}/><span className="ml-2">{item.value}</span>
                            </label>
                        </li>
                    ))}
                </ul>
                <ul className="mb-8">
                <strong><span className="font-mono">Category:</span></strong>
                    {productsCategory.map(item => (
                        <li key={item.id} className="">
                            <label className="font-mono">
                                <input type="checkbox" value={item.value} onChange={changeHandler}/><span className="ml-2">{item.value}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <button className="border font-mono p-2 w-4/5 border-black shadow-offset-lime" onClick={submitHandler}>
                    <span className="text-sm">APPLY</span>
                </button>
            </div>
        </>
    )
};

export default SortFilterItems;
