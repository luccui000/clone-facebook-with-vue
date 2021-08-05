import { createStore } from 'vuex'

export default createStore({
  state: {
      user: {
        name: 'Luc Cui',
        avatar: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647'
      },
      friends: [
        {
          id: 1,
          name: 'Trần Quốc Đảm',
          avatar: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647',
          isActive: true,
          lastActive: Date()
        }, 
        {
          id: 2,
          name: 'Ngọc Chân',
          avatar: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647',
          isActive: true,
          lastActive: Date()
        }, 
        {
          id: 3,
          name: 'Lâm Hữu Nghĩa',
          avatar: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647',
          isActive: true,
          lastActive: Date()
        }, 

        {
          id: 4,
          name: 'Tăng Hồng Điệp',
          avatar: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647',
          isActive: true,
          lastActive: Date()
        }, 
      ],
      groups: [
        {
          id: 1,
          name: 'IOS CodeVn'
        },
        {
          id: 2,
          name: 'J2 TEAM Community'
        },
        {
          id: 3,
          name: 'Trao đổi toán'
        }
      ],
      stories: [
        {
          id: 1,
          name: 'Cover Thanh',
          image: 'img/stories.jpg'
        },
        {
          id: 2,
          name: 'Cover Thanh',
          image: 'img/stories.jpg'
        },
        {
          id: 3,
          name: 'Cover Thanh',
          image: 'img/stories.jpg'
        },
        {
          id: 4,
          name: 'Cover Thanh',
          image: 'img/stories.jpg'
        },
      ],
      activeUsers: [
        {
          id: 1,
          name: 'Ngọc Chân',
          avatar: 'img/activeuser.jpg'
        },
        {
          id: 2,
          name: 'Ngọc Chân',
          avatar: 'img/activeuser.jpg'
        },
        {
          id: 3,
          name: 'Ngọc Chân',
          avatar: 'img/activeuser.jpg'
        }
      ],
      posts: [
        {
          type: 'group',
          post: {
            id: 1,
            author: 'Yung Snow',
            created_at: '20m',
            content: `
              BURP SUITE PRO FOR FREE
              DOWNLOAD-LINKS
              https://www.java.com/en/
              https://getintopc.com/?s=burp+suite`,
            images: [
              {
                id: 1,
                src: 'img/posts.jpg'
              }
            ]
          }
        }, 
        {
          type: 'user',
          post: {
            id: 1,
            name: 'Khac Viet',
            created_at: '20m',
            content: ``,
            images: [
              {
                id: 1,
                src: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t39.30808-1/cp0/p74x74/175668200_1349973478731129_2157869522406749928_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kp6_SaY6I-cAX-qhGRT&_nc_ht=scontent-xsp1-2.xx&oh=9e0d1b290830f66eae01efb311e0ebe7&oe=610F5647'
              }
            ]
          }
        }
      ],
      messagePopups: [
        {
          id: 1,
          user_id: 2,
          isActive: true
        }
      ]
  },
  getters: {
    getAllFriends: state => state.friends,
    getActiveFriends: state => state.friends.filter(e => e.isActive),
    getAllStories: state => state.stories,
    getAllGroups: state => state.groups, 
    // getAllPosts: state => state.posts,
    getUser: state => state.user,
    getUserPosts: state => state.posts.filter(e => e.type === 'user'),
  },
  mutations: {
    
  },
  actions: {

  },
  modules: {

  }
})
