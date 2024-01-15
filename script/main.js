window.onload = async function() {
    var endpoint = "https://api.rss2json.com/v1/api.json";
    var feed_url = "https://www.youtube.com/feeds/videos.xml?playlist_id=PLUk_P7-p7WI_yESyRv7FzMOs-XOg8hHKm";
    
    // rss feed を取得
    var res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed_url}`);
    // text を json 化
    var data = await res.json();
    
    console.log(data.items.length);
    
    let count = 1;
    for(i=1; i<=6; i++){
        let a_data = document.getElementById('movie_link' + count);
        let url = data.items[i-1].link;
        a_data.setAttribute('href', url);

        let img_data = document.getElementById('thumbnail' + count);
        let videoId_data = data.items[i-1].guid;
        let videoId_split = videoId_data.split(':');
        let thumbnail_url = 'http://img.youtube.com/vi/' + videoId_split[2] + '/maxresdefault.jpg'
        img_data.setAttribute('src', thumbnail_url);

        let p_data = document.getElementById('title' + count);
        let title = data.items[i-1].title;
        
        const len = 50; // 半角50字（全角約25字）
        if (title.length > len) {
            p_data.textContent = title.substring(0, len) + "…";
        }
        else{
            p_data.textContent = title;
        }

        count++;
    }
};

$(function()
{
    function post_height(){
        // iframeの高さ
        var height = $('body').height();
        
        //console.log(height);
        
        var obj = {slug: 'iframe_content',height: height};
        
        // 親へiframeの高さを送信
        // postMessage(<送信する値>, <送信先のドメイン>)
        window.parent.postMessage(obj,"your_domain");
    }
    post_height();
    setInterval(post_height, 100);
});