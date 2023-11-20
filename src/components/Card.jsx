import React from 'react'
import location from '../img/icon-location.svg'
import twitter from '../img/icon-twitter.svg'
import website from '../img/icon-website.svg'
import company from '../img/icon-company.svg'


const Card = ({user}) => {
  return (
    <div className='bg-[#1e2a47] mt-10 rounded p-4'>
        <div className='flex items-center md:flex-row flex-col'>
            <img className='rounded-full mr-2' src={user.avatar_url} width="150px" alt="" />
            <div className='p-2 font-semibold'>
                <h1 className='text-3xl'>{user.name}</h1>
                <h1 className=''>@{user.login}</h1>
                <p className='mt-2'>{user.created_at}</p>
            </div>
        </div> 
        <p className='md:text-2xl md:text-left text-lg text-center uppercase mt-4'>{user.bio}</p>
        <div className='bg-[#141d2f] rounded my-4 flex justify-around items-center p-2 flex-col md:flex-row'>
            <p className='flex flex-col items-center'><span className='font-bold'>Repos</span>{user.public_repos}</p>
            <p className='flex flex-col items-center'><span className='font-bold'>Followers</span>{user.followers}</p>
            <p className='flex flex-col items-center'><span className='font-bold'>Following</span>{user.following}</p>
        </div>
        <div className='flex justify-between lg:flex-row flex-col'>
            <p className='flex items-center'><img src={location} width="14px" height="20px" alt="" className='m-2' />{user.location}</p>
            <a className='flex items-center underline hover:text-blue-300' target="_blank" href={`https:twitter.com/${user.twitter_username}`}><img src={twitter} width="14px" height="24px" alt="" className='m-2' />{user.twitter_username}</a>  
            <a className='flex items-center underline hover:text-blue-300' target="_blank" href={user.blog}><img src={website} width="14px" height="24px" alt="" className='m-2' />{user.blog}</a> 
            <p className='flex items-center'><img src={company} width="14px" height="24px" alt="" className='m-2' />{user.company}</p>  
        </div> 
    </div>
  )
}

export default Card
