import { useDeleteMessages } from "@/controllers/API/queries/messages";
import useAlertStore from "@/stores/alertStore";
import useFlowsManagerStore from "@/stores/flowsManagerStore";
import useFlowStore from "@/stores/flowStore";
import { useMessagesStore } from "@/stores/messagesStore";
import { FormsModalPropsType } from "@/types/components";
import { useState } from "react";
import BaseModal from "../baseModal";
import { IconComponents } from "@tabler/icons-react";

export default function FormsModal({
    children,
    open,
    setOpen,
    disable,
    isForms,
}:FormsModalPropsType):JSX.Element {
    const allNodes = useFlowStore((state) => state.nodes);
    const inputs = useFlowStore((state)=> state.inputs).filter(
        (input) => input.type !== "ChatInput",
    );
    const formsInput = useFlowStore((state)=> state.inputs).find(
        (input) => input.type === "FormsInput",
    );

    function sendForm({
        repeat = 1,
        files
    }: {
        repeat:number
        files?: string[];
    }) {
        if (isBuilding) return;
        setIsBuilding(true);
        for (let i = 0; i < repeat; i++ ) {
            buildFlow({
                input_value: formValue,
                startNodeId: formsInput?.id,
                files: files,
                silent: true,
            })
        }
    }



  const buildFlow = useFlowStore((state) => state.buildFlow);
  const setIsBuilding = useFlowStore((state) => state.setIsBuilding);
  const lockChat = useFlowStore((state) => state.lockChat);
  const setLockChat = useFlowStore((state) => state.setLockChat);
  const [formValue, setFormValue] = useState("");
  const isBuilding = useFlowStore((state) => state.isBuilding);
  const currentFlowId = useFlowsManagerStore((state) => state.currentFlowId);
  const setNode = useFlowStore((state) => state.setNode);
  const [sessions, setSessions] = useState<string[]>([]);
  const messages = useMessagesStore((state) => state.messages);
  const flowPool = useFlowStore((state) => state.flowPool);

  return (
    <BaseModal
        open={open}
        setOpen={setOpen}
        disable={disable}
        type={isForms ? "modal" : undefined}
        onSubmit={() => sendForm({repeat: 1})}
        size="x-large"
    >
        <BaseModal.Trigger>{children}</BaseModal.Trigger>
        <BaseModal.Header description={"Please answer all questions in forms"}>
            <div className="flex items-center">
                <span className="pr-2">Forms</span>
                <IconComponents
                    name="notebook-pen"
                    className="h-6 w-6 pl-1 text-foreground"
                    aria-hidden="true"
                />    
            </div>
        </BaseModal.Header>
        <BaseModal.Content overflowHidden>
            
        </BaseModal.Content>    
    </BaseModal>
  )



}