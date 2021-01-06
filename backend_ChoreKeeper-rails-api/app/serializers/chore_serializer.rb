class ChoreSerializer < ActiveModel::Serializer
  attributes :id, :task, :day
  belongs_to :housemate
end

