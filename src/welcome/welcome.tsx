import React from 'react'
import * as Scroll from 'react-scroll'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFontAwesome} from "@fortawesome/free-brands-svg-icons"
import {v4 as uuid} from 'uuid'
import "./welcome.css"


export default function Welcome() {

    const ScrollLink = Scroll.Link
    const ScrollElement = Scroll.Element

    const informationCard = [
        {
            name: "React",
            key: uuid(),
            link: "https://reactjs.org/",
            text: "Ist eine JavaScript Library für User-Interfaces",
            icon: "",
            styleHeader: {
                content:" ",
                backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjZmZmIi8+CiAgPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "92% 52px",
                backgroundColor: "rgb(40, 44, 52)",
                opacity: "0.08"
            }
        },
        {
            name: "FontAwesome",
            key: uuid(),
            link: "https://fontawesome.com/",
            text: "Ist das populärste Icon Set und Toolkit für Websites",
            icon: <FontAwesomeIcon icon={faFontAwesome} className={"fontAwesome"}/>,
            styleHeader: {
                background: "rgb(9, 146, 104) no-repeat center bottom url('https://img.fortawesome.com/349cfdf6/home-scene-covid-19.svg')"
            }
        },
    ]

    return (
        <>
            <ScrollElement name={"welcomeBanner"} className={"section welcomeContainer"}>
                <div className={"welcomeBanner"}>
                    <h1>Willkommen auf meiner Persönlichen Website!</h1>
                    <ScrollLink to={"information"} smooth={true} duration={500} className={"button"}>Mehr Informationen</ScrollLink>
                </div>
            </ScrollElement>
            <ScrollElement name={"information"} className={"section informationContainer"}>
                <div className={"informations"}>
                    <div className={"information"}>
                        <h2>Informationen</h2>
                        <p>Auf dieser Website stelle ich die Projekte und Fortschritte meines Lernprozesses mit React und anderen Tools vor</p>
                    </div>
                    <div className={"InformationCards"}>
                        <h2>Benutzte Tools in diesem Projekt</h2>
                        <div className={"informationCardContainer"}>
                            { informationCard.map(info => {
                                return (
                                    <div key={info.key} className={"informationCard"}>
                                        <div className={"informationCardHeader"}
                                             style={info.styleHeader}>
                                            {info.icon}
                                        </div>
                                        <div className={"informationCardText"}>
                                            <h3>{info.name}</h3>
                                            <p>{info.text}</p>
                                            <a className={"button"} href={info.link} rel={"noreferrer"} target={"_blank"}>Erfahre mehr</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </ScrollElement>
        </>
    )
}
