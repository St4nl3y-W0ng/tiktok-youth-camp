import React from "react";
import Choice from "./Choice";
import themes from "../../themes"
import { useNavigate } from "react-router-dom"

function Choose(props) {
    const navigate = useNavigate()
    function selectTheme(id) {
        navigate('/game')
    }
    return (<div>
        {
            themes.map((theme, index) => {
                return (

                    <Choice
                        key={index}
                        id={index}
                        title={theme.title}
                        onSelect={selectTheme}
                    />

                );
            })
        }
    </div>);
}
export default Choose;
