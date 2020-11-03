import * as api from '../apis/mock.api';
import axios from 'axios';

export const MockUserService = {

    async createMockUser(userData) {
        const newUser = api.newUser()
        const response = await axios.post(newUser.url, userData, {
            headers: newUser.headers
        })
        
        return {
            data:response.data,
            status: response.status
        };
      },
      
}

