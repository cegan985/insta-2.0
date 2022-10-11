import { collection, doc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import Post from './Post'



function Posts() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        ;(async () => {
            const colRef = collection(db, 'posts')
            //const q = query(colRef, orderBy('timestamp', 'desc'))
            const q = query(collection(db, 'posts'), orderBy('timeStamp', 'desc'));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data()
    
                data.id = doc.id
    
                return data
            });
            
            setPosts(querySnapshot.docs)
            unsubscribe();
        }, [db]);
        
        console.log(posts); 

            /*
            onSnapshot(colRef, q, (snapshots) => {
                
    
               const docs = snapshots.docs.map(doc => {
                    
                const data = doc.data()
    
                data.id = doc.id
    
                return data
                })
                       
                setPosts(snapshots.docs)
            
            })*/
        })()
    }, [])
 

 
 
/*
    useEffect(
        () => 
        onSnapshot(
            query(
                collection(db, 'posts'), 
                orderBy('timestamp', 'desc')
                ), 
                (snapshot) => {setPosts(snapshot.docs)}
            ), 
        [db]
    );
    
 /*
    useEffect(() => {
        const unsub = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), 
        (snapshots) => {
            setPosts(snapshots.docs);
        })
        return unsub;
    }, []);

    console.log(posts);
*/
  return (
    <div>
       {posts.map((post) =>(
          <Post 
          key={post.id} 
          id={post.id} 
          username={post.data().username} 
          userImg={post.data().profileImg} 
          img={post.data().image} 
          caption={post.data().caption}
          />  
       ))}
    </div> 
  )
}

export default Posts;