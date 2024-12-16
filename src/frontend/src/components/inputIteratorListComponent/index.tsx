import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function IteratorNodeList({ initialNodes = [], onChange, disabled }) {
  const [nodes, setNodes] = useState(
    initialNodes.length
      ? initialNodes
      : [{ id: 0, label: "Node 1", startValue: "", increment: 1 }],
  );

  const handleInputChange = (id, key, newValue) => {
    const newNodes = nodes.map((node) =>
      node.id === id ? { ...node, [key]: newValue } : node,
    );
    setNodes(newNodes);
    onChange && onChange(newNodes);
  };

  const addNode = () => {
    const newNode = {
      id: nodes.length,
      label: `Node ${nodes.length + 1}`,
      startValue: "",
      increment: 1,
    };
    setNodes([...nodes, newNode]);
  };

  const removeNode = (id) => {
    const newNodes = nodes.filter((node) => node.id !== id);
    setNodes(newNodes);
    onChange && onChange(newNodes);
  };

  return (
    <div className="flex flex-col gap-4">
      {nodes.map((node) => (
        <div key={node.id} className="flex items-center gap-3">
          <Input
            disabled={disabled}
            type="text"
            placeholder="Label"
            value={node.label}
            onChange={(e) =>
              handleInputChange(node.id, "label", e.target.value)
            }
          />
          <Input
            disabled={disabled}
            type="number"
            placeholder="Start Value"
            value={node.startValue}
            onChange={(e) =>
              handleInputChange(node.id, "startValue", e.target.value)
            }
          />
          <Input
            disabled={disabled}
            type="number"
            placeholder="Increment"
            value={node.increment}
            onChange={(e) =>
              handleInputChange(node.id, "increment", e.target.value)
            }
          />
          <Button onClick={() => removeNode(node.id)} disabled={disabled}>
            x
          </Button>
        </div>
      ))}
      <Button onClick={addNode} disabled={disabled}>
        + Add Node
      </Button>
    </div>
  );
}

export default IteratorNodeList;
