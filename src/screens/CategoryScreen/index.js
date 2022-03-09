import React, {useState, useEffect} from "react"
import {StatusBar, Text, Pressable, FlatList} from "react-native"
import Style from  "./style"
import CardCategory from "../../components/CardCategory"
import IArrowRight from "../../assets/images/arrow-right.svg"
import Loading from "../../components/Loading"

function CategoryScreen({navigation}){

    const [elementActive, setElementActive] = useState({
        hasActive: false,
        elementSelected: ""
    })

    function toggle(id){
        if(elementActive.hasActive && elementActive.elementSelected == id){
            setElementActive({...elementActive,
                hasActive: false,
                elementSelected: ""
            })
            return
        }
        setElementActive({...elementActive,
            hasActive: true,
            elementSelected: id
        })
        return
    }

    const [dateCategory, setDateCategory] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getCategorys(){
            try {
                const  response = await fetch("https://dev-meet-backend.herokuapp.com/tipo/")
                const date = await response.json()
                
                setDateCategory(date)
                if(dateCategory){
                    setLoading(false)
                }
                return
            }catch(e){
                console.error(e)
            }
        }
        getCategorys()
    }, [])

    function renderItem({item}){
        return <CardCategory 
            title={item.text} 
            nuEvents={5}
            hasActive={elementActive.hasActive} 
            currentId={elementActive.elementSelected} 
            id={item.id} 
            handleTouch={toggle}
            icon={item.icon}/>;
    };

    return (
    <>
        <StatusBar backgroundColor="#282828"/>
        {loading ? <Loading /> : <Style.Container>
            <Style.WrapperInto>
                <Style.Title>Que tipo de evento você procura?</Style.Title>
                <Style.Description>Selecione a categoria que mais te agrada!</Style.Description>
            </Style.WrapperInto>

            <Style.WrapperCards 
                showsVerticalScrollIndicator={false} 
                showsHorizontalScrollIndicator={false}
                data={dateCategory}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={renderItem}
                />


            {elementActive.hasActive && 
                <Style.WrappButtonNext>
                    <Style.TextNext>Próximo</Style.TextNext>
                    <Style.ButtonNext 
                        onPress={() => {
                            navigation.navigate("EventScreen",{id: elementActive.elementSelected})
                            setElementActive({hasActive: false, elementSelected: ""})
                            }}
                            style={({pressed}) => [
                            {
                                opacity: pressed ? 0.5 : 1
                            }]}>

                        <IArrowRight width={30} height={30}/>
                    </Style.ButtonNext>
                </Style.WrappButtonNext>}

        </Style.Container>}
    </>
    )
}

export default CategoryScreen