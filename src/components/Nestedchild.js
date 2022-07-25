import { useState } from "react";
export default function Nestedchild() {
  const nestedobj = {
    id: 1,
    pid: null,
    children: [
      { id: 2, pid: 1, children: [{ id: 4, pid: 2 }] },
      {
        id: 3,
        pid: 1,
        children: [{ id: 5, pid: 3 }],
      },
    ],
  };
  const [showChild1f, setshowChild1f] = useState(false);
  const [showChild2f, setshowChild2f] = useState(false);
  const [showChild2id, setshowChild2id] = useState();
  const child1arr = [];
  function showChild1() {
    console.log("first nested");

    console.log("child1arr--", nestedobj.children.length);
    for (let i = 0; i < nestedobj.children.length; i++) {
      console.log("for loop--", i, nestedobj.children[i]);
      //child1arr.push[nestedobj.children[i]];
    }
    setshowChild1f(!showChild1f);
  }
  function showChild2(e, nestedobj, child) {
    console.log("event called--", e, nestedobj, child);
    setshowChild2f(!showChild2f);
    setshowChild2id(child.id);
  }

  return (
    <>
      <div>Welcome to nested obj test</div>
      <button onClick={showChild1}>
        {nestedobj.id} {nestedobj.pid === null && "Parent root"}
      </button>
      {showChild1f && (
        <div>
          {nestedobj.children.map((child) => (
            <div>
              {child.pid === nestedobj.id && (
                <button onClick={(e) => showChild2(e, nestedobj, child)}>
                  parent {child.pid} child-{child.id}
                </button>
              )}
              {showChild2f && (
                <div>
                  {child.children.map((nchild) => (
                    <div>
                      {showChild2id === nchild.pid && child.id === nchild.pid && (
                        <button>
                          2nd nesting parent{nchild.pid}
                          child--{nchild.id}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
