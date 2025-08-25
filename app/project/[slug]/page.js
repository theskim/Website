'use client'

import { useParams } from 'next/navigation'
import Modal from '../../../src/components/pages/Projects/Modal'

export default function ProjectPage() {
  const params = useParams()
  const { slug } = params

  return <Modal />
} 