//////////////////////////////////////////////////////////////////////////
window.vids = {
  "sMtckj6gnbg": {
    "title":  "Are these the world's most crispy fries? Let's find out.",
    "author": "fryguy"
    "source": "/watch/fries_hd.mp4",
    "views": 561905,
    "votes": 35695,
    "comments": 564
  },
  "eP2JnstsOWY": {
    "title": "watch me smoke for 3 seconds",
    "author": "allool",
    "source": "https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcTJr9BsRJl6A7W9h9jOYGNP_ZFesTq_-Rwb1A",
    "views": 65,
    "votes": 10,
    "comments": 0
  }
};
//////////////////////////////////////////////////////////////////////////
window.numbrr = (no) => {
  if(1000000000   <= no)
    return `${parseInt(no/1000000000)}b`;
  else if(1000000 <= no)
    return `${parseInt(no/1000000)}m`;
  else if(1000    <= no)
    return `${parseInt(no/1000)}k`;
  else
    return `${no}`;
};
