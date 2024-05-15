const notifications = {
    fruits: ["apple"],
    berries: ["banaNA"],
    citrus: ["kiWi", "ORANGE"]
  };
  function* flattenNotifications() {
    for (let key in notifications) {
      for (let item of notifications[key]) {
        yield item;
      }
    }
  }
  const flattenedArray = [...flattenNotifications()];
  
  console.log(flattenedArray);
  
  