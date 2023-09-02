"use client";
// way-1 to fetch data. // by using useEffect and useState
// import React, { useEffect, useState } from "react";
// way-2 to fetch data // by using swr hook of next.js
import useSWR from "swr";
const Dashboard = () => {
  // way-1 to fetch data
  // const [data, setData] = useState([])
  // const [err, setError] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)
  // useEffect(()=>{
  //   const getData = async () =>{
  //     setIsLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
  //       cache : "no-store"
  //     });
  //     if(!res.ok){
  //       setError(true)
  //     }
  //     const data = await res.json()
  //     setData(data);
  //     setIsLoading(false)
  //   };
  //   getData()
  // },[])

  // way-2 to fetch data
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  if (error) return <div>{error}</div>;
  if (!data) return <div>{isLoading}</div>;
  console.log(data);
  return <div>Dashboard</div>;
};

export default Dashboard;
