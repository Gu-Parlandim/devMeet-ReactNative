import React, {useState, useEffect} from "react"
import { Text} from "react-native"
import Style from  "./style"
import { IconsComponets } from "./Icons"



function CardCategory({title, nuEvents,  hasActive , currentId, handleTouch, id, icon}){
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if(currentId === id){
            setSelected(true)
        }else {
            setSelected(false)
        }
    }, [currentId])
    
    
    
    return (
        <Style.Container onPress={() => handleTouch(id)} selected={selected} hasActive={hasActive}>
            {IconsComponets[icon][selected ? "white" :'orange']}

            <Style.Title  selected={selected} >{title}</Style.Title>
            
            <Style.WrappInfo>
                <Style.Info  selected={selected}>{nuEvents} eventos </Style.Info>
                <Style.InfoSpan  selected={selected} >encontrados</Style.InfoSpan>
            </Style.WrappInfo>
        </Style.Container>
    )
}

export default CardCategory;