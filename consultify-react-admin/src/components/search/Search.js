import React, { useState } from "react";

const Search = ({ setSearch,setPage}) => {
    const [searchData, setSearchData] = useState("");

    const handleKeyEnter = (e) => {
        if (e.key == "Enter") {
            setSearch(searchData);
            setPage(1)
        }
    }

    const handleSearch =(str)=>{
        function onlyLettersAndSpaces(str) {
            return /^[A-Za-z0-9\s]*$/.test(str);
        }

        if (onlyLettersAndSpaces(str)){
            setSearchData(str)
        }
       
    }
    return (
        <>
            <div className="page-title-right">
                <form onSubmit={(e) => e.preventDefault()} className="app-search d-none d-lg-block ">
                    <div className="">
                        <div className="position-relative w-100">
                            <input
                                value={searchData.trimStart()}
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                name="search"
                                onChange={(e) => handleSearch(e.target.value)}
                                onKeyDown={(e) => handleKeyEnter(e)}
                            />
                            <span className="bx bx-search"></span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Search