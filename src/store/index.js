import { createStore } from 'vuex'

export default createStore({
  state: {
      user: {
        name: 'Luc Cui',
        avatar: 'img/luccui.jpeg'
      },
      friends: [
        {
          id: 1,
          name: 'Trần Quốc Đảm',
          avatar: 'img/user.jpg',
          isActive: true,
          lastActive: Date()
        }, 
        {
          id: 2,
          name: 'Ngọc Chân',
          avatar: 'img/user.jpg',
          isActive: true,
          lastActive: Date()
        }, 
        {
          id: 3,
          name: 'Lâm Hữu Nghĩa',
          avatar: 'img/user.jpg',
          isActive: true,
          lastActive: Date()
        }, 

        {
          id: 4,
          name: 'Tăng Hồng Điệp',
          avatar: 'img/user.jpg',
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
    // getAllPosts: state => state.posts
  },
  mutations: {
    
  },
  actions: {

  },
  modules: {

  }
})
