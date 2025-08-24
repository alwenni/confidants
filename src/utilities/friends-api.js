import friend from '../../models/friend';
import sendRequest from './send-request';
const BASE_URL = '/api/friends';
// :white_check_mark: Get logged-in user's friends
export function getUserFriends() {
  return sendRequest(BASE_URL);
}

// :white_check_mark: Create a friend (pass friend data in body)
export function createFriend(friendData) {
  return sendRequest(BASE_URL, 'POST', friendData);
}
// :white_check_mark: Update a friend (needs storyId + updated data)
export function updateFriend(friendId, friendData) {
  return sendRequest(`${BASE_URL}/${friendId}`, 'PUT', friendData);
}
// :white_check_mark: Delete a friend (needs storyId)
export function deleteFriend(friendId) {
  return sendRequest(`${BASE_URL}/${friendId}`, 'DELETE');
}
// :white_check_mark: Get a single friend
export function getFriend(friendId) {
  return sendRequest(`${BASE_URL}/${friendId}`);
}