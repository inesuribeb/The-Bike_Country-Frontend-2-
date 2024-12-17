import Post from "../../pages/stories/Post";

function LatestStories() {
    const posts = [
        {
            id: 1,
            image: "https://content.rapha.cc/_next/image?url=https%3A%2F%2Fmedia.rapha.cc%2Fimage%2Fupload%2Fw_1600%2Cf_auto%2Cq_auto%2Cc_fill%2Car_16%3A9%2Cdpr_2.0%2Cr_0%2Ff_auto%2Fq_auto%3Abest%2Fv1728914199%2Flocation%2Fh224_location_PRO-TEAM-newzealand_04.jpg&w=3840&q=100",
            title: "From France to Navarra",
            // content: `"I've always dreamed of crossing the Pyrenees by mountain bike. This summer, I finally got to make that dream a reality."`,
            client: "Crístobal Fernández",
        },
        {
            id: 2,
            image: "https://media.rapha.cc/rapha-cc/image/upload/c_fill,f_auto,q_auto,dpr_2.0,w_2000,ar_3:2/archive/amplience-image/ta_rapha_ellen_007",
            title: "Cantabrian Mountain Trail",
            // content: `"An epic mountain bike adventure through Cantabria's stunning mountain ranges, discovering remote villages, lush forests, and challenging mountain passes."`,
            client: "Sarah Williams",
        },
        {
            id: 3,
            image: "https://media.rapha.cc/image/upload/c_scale,h_2000/v1673029005/location/h123_location_PARK-CITY_prestige_19.jpg",
            title: "Oiartzun Valley Mountain Bike Expedition",
            // content: `"A challenging mountain bike route through the lush Oiartzun Valley, exploring rural Basque landscapes, ancient forests, traditional farmhouses, and hidden mountain trails with breathtaking views of the surrounding mountains."`,
            client: "Javier Fernández",
        },
    ];
    return (
        <div className="latest-stories-section">
            <div className="top-div">
                <h5>· Stories</h5>
            </div>
            <div id="first-div">
                <div id="third-div">
                    <h3 id="latest">LATEST</h3>
                    <h3 id="stories">STORIES</h3>
                </div>
                <div id="second-div">
                    <section className="blog-stories">
                        <section className="posts">
                            {posts.map((post) => (
                                <Post data={post} key={post.id} />
                            ))}
                        </section>
                    </section>
                </div>
            </div>
        </div>
    );
}
export default LatestStories;
