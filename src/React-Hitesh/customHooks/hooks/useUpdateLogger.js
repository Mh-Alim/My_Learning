import React, { useEffect, useState } from 'react'

const useUpdateLogger = (message) => {
    useEffect(() =>{ console.log(message); },[message])
}

export default useUpdateLogger