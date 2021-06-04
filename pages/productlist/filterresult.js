import React, {useContext} from 'react'
import {ThemeContext} from '../../components/ui/sortfilteritems'

export const FilterResult = () => {
    const {theme} = useContext(ThemeContext)
    console.log('theme', theme)
    return (
        <div>
            
        </div>
    )
};

export default FilterResult
