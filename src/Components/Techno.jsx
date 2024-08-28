import React, { useRef } from "react";
import c from "../Images/c.png";
import b from "../Images/b.jpg";
import a from "../Images/a.jpg";
import d from "../Images/d.png";
import e from "../Images/e.png";
import f from "../Images/f.jpg";
import g from "../Images/g.jpg";
import h from "../Images/h.jpg";
import i from "../Images/i.jpg";
import j from "../Images/j.jpg";
import k from "../Images/k.jpg";
import l from "../Images/l.jpg";
import m from "../Images/m.jpg";
import n from "../Images/n.jpg";
import o from "../Images/o.jpg";
import p from "../Images/p.jpg";
import q from "../Images/q.jpg";
import r from "../Images/r.jpg";
import s from "../Images/s.jpg";
import t from "../Images/t.jpg";
import u from "../Images/u.jpg";
import v from "../Images/v.jpg";
import w from "../Images/w.jpg";

import "../index.css"; // Assume you will create a Techno.css file for styling

function Techno() {
  const scrollRefBottom = useRef(null);
  const scrollRefTop = useRef(null);

  return (
    <div className="techno-container">
      <h1 className="uppercase text-center text-xl sm:text-2xl py-4 lg:text-4xl ">
        THUMBNAIL
      </h1>

      <div ref={scrollRefBottom} className="image-row">
        {[a, b, c, d, e, f, g, h, i, j, k, l, m].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            className="thumbnail   "
          />
        ))}
      </div>

      <div ref={scrollRefTop} className="image-row">
        {[n, o, p, q, r, s, t, u, v, w].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 14}`}
            className="thumbnail"
          />
        ))}
      </div>
    </div>
  );
}

export default Techno;
