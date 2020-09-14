class ChoreSerializer < ActiveModel::Serializer
  attributes :id, :task, :housemate_id, :day
  belongs_to :housemate
end

