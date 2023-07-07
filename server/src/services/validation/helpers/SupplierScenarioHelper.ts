import { ScenarioHelper, ScenarioHelperData } from "./ScenarioHelper";
import { SupplierValidator } from "../../../validators/backendValidator/Supplier/SupplierValidator";
import { Supplier } from "@octocloud/types";
import { ScenarioResult } from "../Scenarios/Scenario";
import { Context } from "../context/Context";

export class SupplierScenarioHelper extends ScenarioHelper {
  public validateSupplier = (
    data: ScenarioHelperData<Supplier>,
    context: Context
  ): ScenarioResult => {
    const { result } = data;
    if (result?.response?.error) {
      return this.handleResult({
        ...data,
        success: false,
        errors: [],
      });
    }
    const errors = new SupplierValidator({
      capabilities: context.getCapabilityIDs(),
    }).validate(result.data);
    return this.handleResult({
      ...data,
      errors,
    });
  };
}
