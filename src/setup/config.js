import NoteApp from "../components/NoteApp";
import GitUsers from "../components/GitUsers";
import PostsApp from "../components/oAuthPosts/PostsApp";
import AlpineApp from "../components/AlpineApp";

const config = {
  header:{},
  sidebar:{
    tabs:[
      {
        component: NoteApp,
        view_name: 'Note App',
        name: 'note_app',
        desc: 'To Store Notes using redux',
        title: 'Notes App'
      },
      {
        component: GitUsers,
        view_name: 'Git Hub User Api',
        name: 'git_hub_user',
        desc: 'To show the git hub user details using api',
        title: 'Github User Details'
      },
      {
        component: PostsApp,
        view_name: 'OAuth Posts',
        name: 'google_oauth',
        desc: 'OAuth Posts with OAuth 2.0',
        title: 'OAuth Posts with OAuth 2.0'
      },
      {
        component: AlpineApp,
        view_name: 'Alpine JS demo',
        name: 'alpine_js_demo',
        desc: 'Hands on and practicing alpine js',
        title: 'Alpine Js demo'
      },
    ]
  }
}

export default config