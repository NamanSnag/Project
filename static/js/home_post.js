{
    let creatPost = ()=>{
            let postNewForm = $('#post-form');
            postNewForm.submit((event)=>{
                event.preventDefault();
                
                $.ajax({
                    type: 'POST',
                    url: '/posts/create',
                    data: postNewForm.serialize(),
                    success: function (data) {
                        console.log(data.posts);
                        let newPost = newPostDOM(data.posts);
                        $('#post-list-container').prepend(newPost);
                        deletePost($(' .post-delete-btn', newPost));
                    },
                    error: function (error) {
                        console.log(error);
                    }
                })
            });
    }

    // function to creating new posts
    let newPostDOM = (post)=>{
            return $(`
                <div class="comment mt-4 text-justify float-left border d-flex justify-content-between">
                    <div>
                        <li class="text-center"><span>${post.user.name}</span></li>
                        <li class="list-group-item">${post.content}</li>
                    </div>

                    <div>
                        <a href="/posts/destroy/${post._id}" class="post-delete-btn" ><button type="button" class="btn btn-outline-danger" style="margin-top: 4px;">X</button></a>
                    </div>
                </div>

                <div class="post-comments">

                    <form action="/comments/create" method="POST">
                        <input type="text" name="content" placeholder="Type Here to add comment...">
                        <input type="hidden" name="post" value="${post._id}" >
                        <input type="submit" value="Add Comment">
                    </form>

                </div>
                <div class="post-comments">
                    
                </div>
                <hr>
            `);
    }

    // method to delete the post
    let deletePost = (post)=>{
        $(post).click((event)=>{
            event.preventDefault();
            
            $.ajax({
                type: 'get',
                url: $(post).prop('href'),
                success: function (data) {
                    console.log(data.posts);
                    $(`#post-${data.posts_id}`).remove();
                },
                error: function (error) {
                    console.log(error);
                }
            });
        })
    }

    creatPost();
}