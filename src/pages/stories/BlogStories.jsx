import { useState } from "react";
import Post from "./Post";
import "./BlogStories.css";

function BlogStories() {
    const [posts, setPosts] = useState([

        {
            id: 1,
            image: "https://content.rapha.cc/_next/image?url=https%3A%2F%2Fmedia.rapha.cc%2Fimage%2Fupload%2Fw_1600%2Cf_auto%2Cq_auto%2Cc_fill%2Car_16%3A9%2Cdpr_2.0%2Cr_0%2Ff_auto%2Fq_auto%3Abest%2Fv1728914199%2Flocation%2Fh224_location_PRO-TEAM-newzealand_04.jpg&w=3840&q=100",
            title: "From France to Navarra",
            // content: `"I've always dreamed of crossing the Pyrenees by mountain bike. This summer, I finally got to make that dream a reality."`,
            client: "Crístobal Fernández"
        },
        {
            id: 2,
            image: "https://media.rapha.cc/rapha-cc/image/upload/c_fill,f_auto,q_auto,dpr_2.0,w_2000,ar_3:2/archive/amplience-image/ta_rapha_ellen_007",
            title: "Cantabrian Mountain Trail",
            // content: `"An epic mountain bike adventure through Cantabria's stunning mountain ranges, discovering remote villages, lush forests, and challenging mountain passes."`,
            client: "Sarah Williams"
        },
        {
            id: 3,
            image: "https://media.rapha.cc/image/upload/c_scale,h_2000/v1673029005/location/h123_location_PARK-CITY_prestige_19.jpg",
            title: "Oiartzun Valley Mountain Bike Expedition",
            // content: `"A challenging mountain bike route through the lush Oiartzun Valley, exploring rural Basque landscapes, ancient forests, traditional farmhouses, and hidden mountain trails with breathtaking views of the surrounding mountains."`,
            client: "Javier Fernández"
        },
        {
            id: 4,
            image: "https://media.rapha.cc/image/upload/ar_3:2,c_scale,w_1440/v1672969679/location/h222_location_BELLINGHAM_prestige_06.jpg",
            title: "Pyrenean Mountain Challenge",
            // content: `"A week-long mountain bike expedition through the most challenging passes of the Pyrenees, testing limits and enjoying spectacular mountain views."`,
            client: "Javier López"
        },
        {
            id: 5,
            image: "https://media.rapha.cc/rapha-cc/image/upload/ar_16:9,c_fill,f_auto,q_auto,w_1920,dpr_2.0/archive/amplience-image/stangel-rapha-austin-2018-054563",
            title: "Basque Greenways and Historic Routes",
            // content: `"Following the ancient railway paths and historic cycling routes through the Basque Country, connecting vibrant towns and experiencing rich cultural landscapes."`,
            client: "David García"
        },
        {
            id: 6,
            image: "https://media.rapha.cc/image/upload/ar_3:2,c_scale,w_1440/v1672969825/location/h222_location_SANTA_CRUZ_prestige_1476.jpg",
            title: "Hondarribi Coastal and Historic Route",
            // content: `"A captivating bicycle journey exploring the stunning coastal town of Hondarribia, navigating through its medieval old town, riding along the picturesque Bay of Biscay, and crossing the border to explore the French side of the Txingudi Bay, experiencing the unique borderland landscapes and rich cultural heritage."`,
            client: "María Martínez"
        },
        {
            id: 7,
            image: "https://media.rapha.cc/rapha-cc/image/upload/ar_16:9,c_fill,f_auto,q_auto,w_1920,dpr_2.0/archive/amplience-image/_27A7278",
            title: "Pasaia to San Sebastián Coastal Trail",
            // content: `"An exhilarating bike journey along the rugged Gipuzkoa coastline, starting from the historic maritime town of Pasaia and winding through scenic routes to the vibrant city of San Sebastián, experiencing the Basque Country's most beautiful coastal landscapes."`,
            client: "María García" 
        },
        {
            id: 9,
            image: "https://content.rapha.cc/_next/image?url=https%3A%2F%2Fmedia.rapha.cc%2Fimage%2Fupload%2Fw_1600%2Cf_auto%2Cq_auto%2Cc_fill%2Car_16%3A9%2Cdpr_2.0%2Cr_0%2Ff_auto%2Fq_auto%3Abest%2Fv1708448277%2Fevent%2Fh124_event_PRESTIGE_updates_01.jpg&w=3840&q=100",
            title: "The Basque Borderlands Trail",
            // content: `"A challenging mountain bike expedition tracing the intricate border between France and Spain, exploring remote mountain passes, ancient shepherd trails, and breathtaking landscape transitions from the Atlantic Pyrenees to the heart of Basque country."`,
            client: "Thomas Henderson"
        },
        {
            id: 7,
            image: "https://media.rapha.cc/rapha-cc/image/upload/ar_16:9,c_fill,f_auto,q_auto,w_1920,dpr_2.0/archive/amplience-image/Thomas-Maheux-2020_BarnesAli_Niewiadoma_TM_115022",
            title: "Basque Country Bike Expedition",
            // content: `"Navigating the challenging terrain of the Basque Country, from coastal routes to mountain trails, experiencing the region's unique culture and landscapes."`,
            client: "Elena García"
        },
        {
            id: 10,
            image: "https://media.rapha.cc/image/upload/ar_2:3,c_fill,f_auto,q_auto,w_992,dpr_2.0/v1672853866/location/h123_location_EF-TEAMCAMP_womens_03.jpg",
            title: "Txingudi Bay Cycling Adventure",
            // content: `"A scenic bicycle route connecting Hondarribia, Irun, and the French border town of Hendaye, exploring the unique cross-border landscape of the Txingudi Bay, with stunning views of the Pyrenees and the Atlantic coastline."`,
            client: "Carlos Rodríguez"
        },
        {  
            id: 11,
            image: "https://media.rapha.cc/rapha-cc/image/upload/c_fill,f_auto,q_auto,dpr_2.0,w_992/archive/adis-image/_27A5272",
            title: "Bilbao to Biarritz Cross-Border Adventure",
            // content: `"An incredible cross-border cycling route connecting two iconic cities, traversing diverse landscapes from urban centers to rural mountain trails."`,
            client: "Alex Martinez"
        },
        {
            id: 12,
            image: "https://media.rapha.cc/rapha-cc/image/upload/c_fill,f_auto,q_auto,dpr_2.0,w_2000,ar_3:2/archive/amplience-image/ta_rapha_ellen_021",
            title: "Pyrenean Basque Border Expedition",
            // content: `"Exploring the rugged mountain trails connecting the French Pyrenees with the Spanish Basque Country, challenging terrain and incredible mountain landscapes."`,
            client: "Michael Rodriguez"

        }


    ]);

    const [lastId, setLastId] = useState(9);


    /*

    function handleNewPost(data) {
        const newPost = { ...data, id: lastId + 1 };
        setLastId(lastId => lastId + 1);
        setPosts(oldPosts => [newPost, ...oldPosts]);
    }

    function handleDeletePost(id) {
        setPosts(oldPosts => oldPosts.filter(post => post.id !== id));
    }

    function handleUpdatePost(editedPost) {
        console.log(editedPost);
        setPosts(oldPosts => oldPosts.map(post => {
            if (post.id !== editedPost.id) {
                return post;
            } else {
                return editedPost;
            }
        }))
    }  
*/
    return (
        <section className="blog-stories">
            <section className="posts">
                {posts.map(post => (
                    <Post data={post} key={post.id} />
                ))}
            </section>
        </section>
    )
}
export default BlogStories;