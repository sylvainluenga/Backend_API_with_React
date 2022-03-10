import Recat, { component } from 'react'
import axios from 'axios'

class postList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                posts: response.data
            })
            console.log(response.data)
        })
    }

    render() {
        const {post} = this.state
        return(
            <div>
                <h1>List Of Posts</h1>
                {
                 posts.map(post => <div key={posts.id}>{post.title}</div>)

                }
            </div>
        )
        
    }

}


export default postList

