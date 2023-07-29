import Tiptap from '../core/components/Tiptap'
import '../core/components/Tiptap/styles.scss'

import Select from 'react-select'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import Input from '@material-ui/core/Input'
import subCategoryOptions from '../core/enums/SubCategoryTypeEnum'
import categoryOptions from '../core/enums/CategoryTypeEnum'
import React, { useEffect, useState, KeyboardEventHandler } from 'react'
import Publication from '../core/models/Publication'

import CreatableSelect from 'react-select/creatable'

interface ICategoryFilterType {
  [key: string]: number[] // Define the type for the index signature
}

const components = {
  DropdownIndicator: null,
}

interface Option {
  readonly label: string
  readonly value: string
}

const createOption = (label: string) => ({
  label,
  value: label,
})
const App = () => {
  const [markdown, setMarkdown]: any = useState('')

  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      title: '',
      categoryType: null,
      subCategoryType: null,
      tags: null,
    },
  })

  function generateUniqueRandomSlug(title: string) {
    const h = 0
    for (let h = 0, i = 0; i < title.length; h &= h) {
      h = (17 * h + title.charCodeAt(i++)) % 10240
    }
    return `${h < 0 ? `0${h * -1}` : `1${h}`}${Math.floor(
      Math.random() * 10,
    )}${new Date().getTime()}`
  }

  const onSubmit: SubmitHandler<any> = (data: any) => {
    const tags =
      multiValue.length === 0
        ? null
        : multiValue.map((e) => {
            return e.value
          })
    const slug = generateUniqueRandomSlug(data.title)
    const publication = new Publication(
      data.title,
      markdown,
      slug,
      data.categoryType.value,
      data.subCategoryType.value,
      tags,
    )

    console.log(publication)
  }

  const [subCategories, setSubCategories] = useState([])

  const CategoryFilter: ICategoryFilterType = {
    NATURAL_SCIENCES: [0, 10],
    SOCIAL_SCIENCES: [10, 21],
    ENGINEERING: [21, 30],
    COMPUTER_SCIENCE: [30, 48],
    EXACT_SCIENCES: [48, 66],
    ARTS: [66, 70],
    OTHER: [70, 71],
  }

  const categoryTypeValue: any = watch('categoryType')
  useEffect(() => {
    if (
      categoryTypeValue !== null &&
      categoryTypeValue !== undefined &&
      Object.keys(categoryTypeValue).length !== 0
    ) {
      setValue('subCategoryType', null)
      const subCategoriesSlice: any = subCategoryOptions.slice(
        CategoryFilter[categoryTypeValue.value][0],
        CategoryFilter[categoryTypeValue.value][1],
      )
      setSubCategories(subCategoriesSlice)
    }
  }, [categoryTypeValue])

  const [inputValue, setInputValue] = React.useState('')
  const [multiValue, setMultiValue] = React.useState<readonly Option[]>([])

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return
    if (multiValue.length >= 3) return
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setMultiValue((prev) => [...prev, createOption(inputValue)])
        setInputValue('')
        event.preventDefault()
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col xl gap-y-3"
    >
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Title" className="w-full" />
        )}
      />
      <Tiptap setMarkdown={setMarkdown} />
      <Controller
        name="categoryType"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={categoryOptions}
            placeholder="Choose the category"
          />
        )}
      />
      <Controller
        name="subCategoryType"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={subCategories}
            placeholder="Choose the sub category"
          />
        )}
      />
      <CreatableSelect
        components={components}
        inputValue={inputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={(newValue) => setMultiValue(newValue)}
        onInputChange={(newValue) => setInputValue(newValue)}
        onKeyDown={handleKeyDown}
        placeholder="Add key-words/tags and type enter..."
        value={multiValue}
      />
      <input type="submit" />
    </form>
  )
}

export default App
