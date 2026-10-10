import type { Exercise as ExerciseType } from "@/lib/types";
import { DictationExercise } from "./DictationExercise";
import { GapExercise } from "./GapExercise";
import { MatchExercise } from "./MatchExercise";
import { McqExercise } from "./McqExercise";
import { OrderExercise } from "./OrderExercise";
import { RespondExercise } from "./RespondExercise";
import { ShadowExercise } from "./ShadowExercise";
import { SpeakExercise } from "./SpeakExercise";
import { TfngExercise } from "./TfngExercise";
import { WriteExercise } from "./WriteExercise";

export function Exercise({ exercise }: { exercise: ExerciseType }) {
  switch (exercise.kind) {
    case "mcq":
      return <McqExercise exercise={exercise} />;
    case "tfng":
      return <TfngExercise exercise={exercise} />;
    case "gap":
      return <GapExercise exercise={exercise} />;
    case "match":
      return <MatchExercise exercise={exercise} />;
    case "order":
      return <OrderExercise exercise={exercise} />;
    case "dictation":
      return <DictationExercise exercise={exercise} />;
    case "respond":
      return <RespondExercise exercise={exercise} />;
    case "shadow":
      return <ShadowExercise exercise={exercise} />;
    case "speak":
      return <SpeakExercise exercise={exercise} />;
    case "write":
      return <WriteExercise exercise={exercise} />;
  }
}
