const { ObjectId } = require('mongodb');
/**
 * queryCreator creates a query, whith a given array and the params from it.
 * in the proyect. userCourses has from response an array with the given object
 * {
 *  _id:
 *  user_id:
 *  courses_id:
 * }
 * this function creates an array wich contains only the courses id or the users_id.
 * @param itemsList: array of objects from the response of userCourses
 * @param item: param from the elements of the array. normal values: user_id || courses_id
 * @response ['id1','id2','id3'] || []
 */
const queryCreator = (itemsList, item) => {
  let _ids = [];
  if (itemsList[0][item]) {
    for (let i = 0; i < itemsList.length; i++) {
      _ids[i] = ObjectId(itemsList[i][item]);
    }
  }
  return { _id: _ids };
};

module.exports = queryCreator;
