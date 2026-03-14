window.vids = {
  "sMtckj6gnbg": {
    "title":  "Are these the world's most crispy fries? Let's find out.",
    "source": "/watch/fries_hd.mp4",
    "views": 561905,
    "votes": 35695,
    "comments": 564
  }
};
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
