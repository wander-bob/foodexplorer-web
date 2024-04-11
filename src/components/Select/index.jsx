import { PiCaretDownBold as Down, PiCoins } from "react-icons/pi";
import * as SelectRoot from "./styles";

export function Select({title, optionsData, selectedCategoryId, onChange}){
  return (
    <SelectRoot.Container>
      <label htmlFor="custom-select">{title}</label>
      <SelectRoot.SelectWrapper>
        <Down />
        <SelectRoot.Select id="custom-select" onChange={onChange}>
          {
            optionsData.map((option)=>(
              <SelectRoot.Option 
                key={`${option.title}-${option.id}`} 
                value={option.title}
                defaultValue={selectedCategoryId === option.id}
              >
                  {option.label}
              </SelectRoot.Option>
            ))
          }
        </SelectRoot.Select>
      </SelectRoot.SelectWrapper>
    </SelectRoot.Container>
  )
}