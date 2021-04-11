import { useEffect, useState } from "react";
import axios from "axios";


export function GetListProduct(): Promise<any> {
        return axios.get("http://localhost:5000/product")
}