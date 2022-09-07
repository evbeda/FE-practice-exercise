import React from "react";

export function FormLanguage(){
    return(
        <form>
            <select name="language">
                <option value="eng-us">English (US)</option>
                <option value="esp-latam">Español (Latam)</option>
            </select>
        </form>
    )
}